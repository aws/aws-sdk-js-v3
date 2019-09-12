/**
 * Type that is implemented by all Smithy structures.
 */
export interface SmithyStructure {
  $namespace: string;
  $name: string;
}

/**
 * Type that is extended by all Smithy shapes marked with the
 * error trait.
 */
export class SmithyException extends Error {
  /**
   * The namespace of the exception.
   */
  readonly $namespace: string;

  /**
   * The shape name of the exception.
   */
  readonly $name: string;

  /**
   * Whether the client or server are at fault.
   */
  readonly $fault: "client" | "server";

  /**
   * The service that encountered the exception.
   */
  readonly service: string;

  constructor(args: ExceptionConstructorArgs) {
    super(args.message || "");
    this.$namespace = args.namespace;
    this.$name = args.name;
    this.$fault = args.fault;
    this.service = args.service;
  }
}

export interface ExceptionConstructorArgs {
  /**
   * The namespace of the exception.
   */
  namespace: string;

  /**
   * The shape name of the exception.
   */
  name: string;

  /**
   * Whether the client or server are at fault.
   */
  fault: "client" | "server";

  /**
   * The message of the exception.
   */
  message?: string;

  /**
   * The service that encountered the exception.
   */
  service: string;
}

// Document types from Smithy models are represented using the following types.
export namespace DocumentType {
  export type Value = Scalar | Structure | List;
  export type Scalar = string | number | boolean | null | Uint8Array | Date;
  export type Structure = { [member: string]: Value };
  export interface List extends Array<Value> {}
}

/**
 * Contains an unknown variant for a tagged union.
 *
 * This type allows tagged unions to not lose unknown data encountered
 * when deserializing types.
 */
export interface UnknownVariant {
  /**
   * A tuple containing the name of the unknown tag followed by the
   * value of the unknown tag.
   */
  $unknown?: [string, any];
}

/**
 * Represents a tagged union where only one member of an object can be
 * specified at any given time.
 *
 * Unknown variant tags are always stored in the `$unknown` property
 * defined by the [[UnknownVariant]] interface.
 */
export type TaggedUnion<T> = TaggedUnionHelper<T>;

type TaggedUnionHelper<_T, T = UnknownVariant & _T> = Pick<
  T,
  Exclude<keyof T, keyof T>
> &
  { [K in keyof T]-?: ExactlyOne<T, K> }[keyof T];

type ExactlyOne<T, K extends keyof T> = Required<Pick<T, K>> &
  Partial<Record<Exclude<keyof T, K>, undefined>>;
