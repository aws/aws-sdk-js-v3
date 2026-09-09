/**
 * Minimal type definitions for the Smithy JSON AST.
 *
 * @public
 */
export interface SmithyAst {
  smithy: string;
  metadata?: Record<string, unknown>;
  shapes: Record<string, AstShape>;
}

/**
 * A reference to another shape by its absolute shape ID.
 *
 * @public
 */
export interface AstReference {
  target: string;
}

/**
 * Trait values are keyed by absolute trait shape ID.
 *
 * @public
 */
export type AstTraits = Record<string, unknown>;

/**
 * A member of an aggregate shape.
 *
 * @public
 */
export interface AstMember {
  target: string;
  traits?: AstTraits;
}

/**
 * A single shape node in the AST.
 *
 * @public
 */
export interface AstShape {
  type: ShapeType;
  traits?: AstTraits;

  /**
   * Present on structure, union, and error-like structure shapes.
   */
  members?: Record<string, AstMember>;

  /**
   * Present on list and set shapes.
   */
  member?: AstMember;

  /**
   * Present on map shapes.
   */
  key?: AstMember;
  value?: AstMember;

  /**
   * Present on operation shapes.
   */
  input?: AstReference;
  output?: AstReference;
  errors?: AstReference[];

  /**
   * Present on service shapes.
   */
  version?: string;
  operations?: AstReference[];
  resources?: AstReference[];
}

/**
 * The set of Smithy shape types encountered in the AST.
 *
 * @public
 */
export type ShapeType =
  | "blob"
  | "boolean"
  | "string"
  | "enum"
  | "byte"
  | "short"
  | "integer"
  | "intEnum"
  | "long"
  | "float"
  | "double"
  | "bigInteger"
  | "bigDecimal"
  | "timestamp"
  | "document"
  | "list"
  | "set"
  | "map"
  | "structure"
  | "union"
  | "operation"
  | "service"
  | "resource";
