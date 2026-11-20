// smithy-typescript generated code
import type { DocumentType as __DocumentType } from "@smithy/types";

import type { ProvenanceRelation, RecordType } from "./enums";

/**
 * @public
 */
export interface SearchPublicRecordsRequest {
  /**
   * Free-text natural-language query (ARD `text`). Drives semantic + lexical ranking.
   * @public
   */
  searchQuery?: string | undefined;

  /**
   * Structured filter narrowing the results, in the grammar of Agent Registry's
   * SearchDiscoverableRegistryRecords `filters`: `$eq`, `$ne` and `$in` on a field, with `$and` or `$or`
   * over single-condition objects, never nested. Fields are `identifier`, `domain`, `recordType`,
   * `descriptorType`, `provenance` and `recordVersion`, and `identifier` also takes `$prefix`. For example
   * `\{"recordType": \{"$eq": "AGENT"\}\}` or
   * `\{"$or": [\{"recordType": \{"$eq": "MCP"\}\}, \{"domain": \{"$eq": "acme.com"\}\}]\}`.
   *
   * <p>Limits, the same ones Agent Registry applies: at most 10 conditions, `$in` takes 1-25 values, values
   * are strings of 1-512 characters, and `\{\}` is invalid. A `document` can't carry `@length`, so the service
   * enforces these and answers a filter past them with a ValidationException, as Agent Registry does.
   * @public
   */
  filters?: __DocumentType | undefined;

  /**
   * Max records per page. Default 20, max 100.
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Opaque composite-cursor pagination token (O-DM12).
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * A URL that hosts descriptor content.
 * @public
 */
export interface DescriptorSourceUrl {
  /**
   * The URL of the externally hosted descriptor content.
   * @public
   */
  url: string | undefined;
}

/**
 * Reference to descriptor content hosted at a URL.
 * @public
 */
export interface DescriptorSource {
  /**
   * The URL that hosts the descriptor content.
   * @public
   */
  fromUrl?: DescriptorSourceUrl | undefined;
}

/**
 * The resolvable identifier value. Discriminated union — exactly one member is set.
 * @public
 */
export type Identifier =
  | Identifier.DomainMember
  | Identifier.UriMember
  | Identifier.$UnknownMember;

/**
 * @public
 */
export namespace Identifier {
  /**
   * Verified domain (e.g. example.com).
   * @public
   */
  export interface DomainMember {
    domain: string;
    uri?: never;
    $unknown?: never;
  }

  /**
   * Arbitrary resolvable URI (urn / url / did).
   * @public
   */
  export interface UriMember {
    domain?: never;
    uri: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    domain?: never;
    uri?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    domain: (value: string) => T;
    uri: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Lineage of a record (AI Catalog Provenance Link Object), with only its required members.
 * @public
 */
export interface ProvenanceLink {
  /**
   * How the contributor got the record.
   * @public
   */
  relation: ProvenanceRelation | undefined;

  /**
   * The source of the record. Not always a URI. On `publishedFrom` it's the value of the record's
   * `identifier` union member, `identifier.uri` or `identifier.domain`, unchanged. On `discoveredFrom` it's
   * the name the registry gave the partner source when it was configured for crawling, not a URL.
   * @public
   */
  sourceId: string | undefined;
}

/**
 * One contributor's trust metadata about a record (AI Catalog Trust Manifest Object), with only the
 * members the registry sets. AI Catalog's other members (`subject`, `signature`, `trustSchema`,
 * `attestations`, `extensions`) are optional, so each can be added when something sets it.
 * @public
 */
export interface TrustManifest {
  /**
   * Absolute URI of the contributor these claims are attributed to.
   * @public
   */
  contributor: string | undefined;

  /**
   * The record's lineage as the contributor states it: how the contributor got the record, and from
   * which source.
   * @public
   */
  provenance?: ProvenanceLink[] | undefined;
}

/**
 * A descriptor slot value (A2A card, MCP server card, skills definition, custom). Content is
 * either inline (`data`) or a reference (`source`). `additionalData` carries nested sub-descriptors
 * (e.g. mcpServer.tools, agentSkillsDefinition.skillMd).
 * @public
 */
export interface DescriptorEntry {
  /**
   * Inline descriptor content (JSON string).
   * @public
   */
  data?: string | undefined;

  /**
   * Descriptor type version.
   * @public
   */
  version?: string | undefined;

  /**
   * Reference to externally-hosted descriptor content.
   * @public
   */
  source?: DescriptorSource | undefined;

  /**
   * Nested sub-descriptors keyed by slot name (e.g. `tools`, `skillMd`).
   * @public
   */
  additionalData?: Record<string, DescriptorEntry> | undefined;
}

/**
 * A public record returned by search. Only the record's public descriptors are included.
 * @public
 */
export interface PublicRecord {
  /**
   * The resolvable identifier value. Discriminated union — exactly one member is set.
   * @public
   */
  identifier: Identifier | undefined;

  /**
   * The record's display name.
   * @public
   */
  displayName: string | undefined;

  /**
   * A description of the record.
   * @public
   */
  description?: string | undefined;

  /**
   * The kind of resource the record describes, such as an agent, a tool, or a skill.
   * @public
   */
  recordType: RecordType | undefined;

  /**
   * FQDN per RFC-1035/1123, case-insensitive, at least two labels.
   * @public
   */
  domain?: string | undefined;

  /**
   * Every PUBLIC descriptor slot the record was published with, as published: each slot's `source`,
   * inline `data`, `version` and nested `additionalData`, the `custom` slot included. Absent on a record
   * discovered at a partner source; ARD serves the partner's cards.
   * @public
   */
  descriptors?: Record<string, DescriptorEntry> | undefined;

  /**
   * Trust Manifests (AI Catalog Trust Manifest Object), today only the registry's own, `contributor`
   * `did:web:agent-registry.global.api.aws`. Its one provenance link says how the registry got the record:
   * `relation` is `publishedFrom` for a record its owner published and `discoveredFrom` for one the registry
   * discovered at a partner source, with `sourceId` as `ProvenanceLink.sourceId` describes. The `provenance`
   * filter takes the same values (see `ProvenanceRelation`). It's left off when the registry can't name the
   * source: a `federatedFrom` record until the index carries the peer registry, a discovered record with no
   * source, or a missing or unknown origin. The manifest is unsigned, so it attributes the claim to the
   * registry and doesn't authenticate it.
   * @public
   */
  trustManifests?: TrustManifest[] | undefined;

  /**
   * The record's version string, set by its publisher. Left off when the record has none, for example
   * a discovered record whose source carries no version.
   * @public
   */
  recordVersion?: string | undefined;

  /**
   * When the record was created.
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * When the record was last updated.
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface SearchPublicRecordsResponse {
  /**
   * The records that match the search, most relevant first.
   * @public
   */
  records: PublicRecord[] | undefined;

  /**
   * The token to pass in a later request to get the next page of results. Absent when there are no
   * more results.
   * @public
   */
  nextToken?: string | undefined;
}
