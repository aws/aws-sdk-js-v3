import {
  CancelJournalKinesisStreamCommandInput,
  CancelJournalKinesisStreamCommandOutput,
} from "../commands/CancelJournalKinesisStreamCommand";
import { CreateLedgerCommandInput, CreateLedgerCommandOutput } from "../commands/CreateLedgerCommand";
import { DeleteLedgerCommandInput, DeleteLedgerCommandOutput } from "../commands/DeleteLedgerCommand";
import {
  DescribeJournalKinesisStreamCommandInput,
  DescribeJournalKinesisStreamCommandOutput,
} from "../commands/DescribeJournalKinesisStreamCommand";
import {
  DescribeJournalS3ExportCommandInput,
  DescribeJournalS3ExportCommandOutput,
} from "../commands/DescribeJournalS3ExportCommand";
import { DescribeLedgerCommandInput, DescribeLedgerCommandOutput } from "../commands/DescribeLedgerCommand";
import { ExportJournalToS3CommandInput, ExportJournalToS3CommandOutput } from "../commands/ExportJournalToS3Command";
import { GetBlockCommandInput, GetBlockCommandOutput } from "../commands/GetBlockCommand";
import { GetDigestCommandInput, GetDigestCommandOutput } from "../commands/GetDigestCommand";
import { GetRevisionCommandInput, GetRevisionCommandOutput } from "../commands/GetRevisionCommand";
import {
  ListJournalKinesisStreamsForLedgerCommandInput,
  ListJournalKinesisStreamsForLedgerCommandOutput,
} from "../commands/ListJournalKinesisStreamsForLedgerCommand";
import {
  ListJournalS3ExportsCommandInput,
  ListJournalS3ExportsCommandOutput,
} from "../commands/ListJournalS3ExportsCommand";
import {
  ListJournalS3ExportsForLedgerCommandInput,
  ListJournalS3ExportsForLedgerCommandOutput,
} from "../commands/ListJournalS3ExportsForLedgerCommand";
import { ListLedgersCommandInput, ListLedgersCommandOutput } from "../commands/ListLedgersCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  StreamJournalToKinesisCommandInput,
  StreamJournalToKinesisCommandOutput,
} from "../commands/StreamJournalToKinesisCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateLedgerCommandInput, UpdateLedgerCommandOutput } from "../commands/UpdateLedgerCommand";
import {
  UpdateLedgerPermissionsModeCommandInput,
  UpdateLedgerPermissionsModeCommandOutput,
} from "../commands/UpdateLedgerPermissionsModeCommand";
import {
  InvalidParameterException,
  JournalKinesisStreamDescription,
  JournalS3ExportDescription,
  KinesisConfiguration,
  LedgerEncryptionDescription,
  LedgerSummary,
  LimitExceededException,
  ResourceAlreadyExistsException,
  ResourceInUseException,
  ResourceNotFoundException,
  ResourcePreconditionNotMetException,
  S3EncryptionConfiguration,
  S3ExportConfiguration,
  ValueHolder,
} from "../models/models_0";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  expectBoolean as __expectBoolean,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  parseEpochTimestamp as __parseEpochTimestamp,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
  SmithyException as __SmithyException,
} from "@aws-sdk/types";

export const serializeAws_restJson1CancelJournalKinesisStreamCommand = async (
  input: CancelJournalKinesisStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/ledgers/{LedgerName}/journal-kinesis-streams/{StreamId}";
  if (input.LedgerName !== undefined) {
    const labelValue: string = input.LedgerName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: LedgerName.");
    }
    resolvedPath = resolvedPath.replace("{LedgerName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: LedgerName.");
  }
  if (input.StreamId !== undefined) {
    const labelValue: string = input.StreamId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: StreamId.");
    }
    resolvedPath = resolvedPath.replace("{StreamId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: StreamId.");
  }
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateLedgerCommand = async (
  input: CreateLedgerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ledgers";
  let body: any;
  body = JSON.stringify({
    ...(input.DeletionProtection !== undefined &&
      input.DeletionProtection !== null && { DeletionProtection: input.DeletionProtection }),
    ...(input.KmsKey !== undefined && input.KmsKey !== null && { KmsKey: input.KmsKey }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.PermissionsMode !== undefined &&
      input.PermissionsMode !== null && { PermissionsMode: input.PermissionsMode }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1Tags(input.Tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteLedgerCommand = async (
  input: DeleteLedgerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ledgers/{Name}";
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DescribeJournalKinesisStreamCommand = async (
  input: DescribeJournalKinesisStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/ledgers/{LedgerName}/journal-kinesis-streams/{StreamId}";
  if (input.LedgerName !== undefined) {
    const labelValue: string = input.LedgerName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: LedgerName.");
    }
    resolvedPath = resolvedPath.replace("{LedgerName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: LedgerName.");
  }
  if (input.StreamId !== undefined) {
    const labelValue: string = input.StreamId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: StreamId.");
    }
    resolvedPath = resolvedPath.replace("{StreamId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: StreamId.");
  }
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DescribeJournalS3ExportCommand = async (
  input: DescribeJournalS3ExportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/ledgers/{Name}/journal-s3-exports/{ExportId}";
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
  if (input.ExportId !== undefined) {
    const labelValue: string = input.ExportId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ExportId.");
    }
    resolvedPath = resolvedPath.replace("{ExportId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ExportId.");
  }
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DescribeLedgerCommand = async (
  input: DescribeLedgerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ledgers/{Name}";
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1ExportJournalToS3Command = async (
  input: ExportJournalToS3CommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ledgers/{Name}/journal-s3-exports";
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.ExclusiveEndTime !== undefined &&
      input.ExclusiveEndTime !== null && { ExclusiveEndTime: Math.round(input.ExclusiveEndTime.getTime() / 1000) }),
    ...(input.InclusiveStartTime !== undefined &&
      input.InclusiveStartTime !== null && {
        InclusiveStartTime: Math.round(input.InclusiveStartTime.getTime() / 1000),
      }),
    ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
    ...(input.S3ExportConfiguration !== undefined &&
      input.S3ExportConfiguration !== null && {
        S3ExportConfiguration: serializeAws_restJson1S3ExportConfiguration(input.S3ExportConfiguration, context),
      }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetBlockCommand = async (
  input: GetBlockCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ledgers/{Name}/block";
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.BlockAddress !== undefined &&
      input.BlockAddress !== null && { BlockAddress: serializeAws_restJson1ValueHolder(input.BlockAddress, context) }),
    ...(input.DigestTipAddress !== undefined &&
      input.DigestTipAddress !== null && {
        DigestTipAddress: serializeAws_restJson1ValueHolder(input.DigestTipAddress, context),
      }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetDigestCommand = async (
  input: GetDigestCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ledgers/{Name}/digest";
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetRevisionCommand = async (
  input: GetRevisionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ledgers/{Name}/revision";
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.BlockAddress !== undefined &&
      input.BlockAddress !== null && { BlockAddress: serializeAws_restJson1ValueHolder(input.BlockAddress, context) }),
    ...(input.DigestTipAddress !== undefined &&
      input.DigestTipAddress !== null && {
        DigestTipAddress: serializeAws_restJson1ValueHolder(input.DigestTipAddress, context),
      }),
    ...(input.DocumentId !== undefined && input.DocumentId !== null && { DocumentId: input.DocumentId }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1ListJournalKinesisStreamsForLedgerCommand = async (
  input: ListJournalKinesisStreamsForLedgerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/ledgers/{LedgerName}/journal-kinesis-streams";
  if (input.LedgerName !== undefined) {
    const labelValue: string = input.LedgerName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: LedgerName.");
    }
    resolvedPath = resolvedPath.replace("{LedgerName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: LedgerName.");
  }
  const query: any = {
    ...(input.MaxResults !== undefined && { max_results: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { next_token: input.NextToken }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListJournalS3ExportsCommand = async (
  input: ListJournalS3ExportsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/journal-s3-exports";
  const query: any = {
    ...(input.MaxResults !== undefined && { max_results: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { next_token: input.NextToken }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListJournalS3ExportsForLedgerCommand = async (
  input: ListJournalS3ExportsForLedgerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ledgers/{Name}/journal-s3-exports";
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
  const query: any = {
    ...(input.MaxResults !== undefined && { max_results: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { next_token: input.NextToken }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListLedgersCommand = async (
  input: ListLedgersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ledgers";
  const query: any = {
    ...(input.MaxResults !== undefined && { max_results: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { next_token: input.NextToken }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceArn.");
    }
    resolvedPath = resolvedPath.replace("{ResourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1StreamJournalToKinesisCommand = async (
  input: StreamJournalToKinesisCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/ledgers/{LedgerName}/journal-kinesis-streams";
  if (input.LedgerName !== undefined) {
    const labelValue: string = input.LedgerName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: LedgerName.");
    }
    resolvedPath = resolvedPath.replace("{LedgerName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: LedgerName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.ExclusiveEndTime !== undefined &&
      input.ExclusiveEndTime !== null && { ExclusiveEndTime: Math.round(input.ExclusiveEndTime.getTime() / 1000) }),
    ...(input.InclusiveStartTime !== undefined &&
      input.InclusiveStartTime !== null && {
        InclusiveStartTime: Math.round(input.InclusiveStartTime.getTime() / 1000),
      }),
    ...(input.KinesisConfiguration !== undefined &&
      input.KinesisConfiguration !== null && {
        KinesisConfiguration: serializeAws_restJson1KinesisConfiguration(input.KinesisConfiguration, context),
      }),
    ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
    ...(input.StreamName !== undefined && input.StreamName !== null && { StreamName: input.StreamName }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1Tags(input.Tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceArn.");
    }
    resolvedPath = resolvedPath.replace("{ResourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1Tags(input.Tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceArn.");
    }
    resolvedPath = resolvedPath.replace("{ResourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  const query: any = {
    ...(input.TagKeys !== undefined && { tagKeys: (input.TagKeys || []).map((_entry) => _entry as any) }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1UpdateLedgerCommand = async (
  input: UpdateLedgerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ledgers/{Name}";
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.DeletionProtection !== undefined &&
      input.DeletionProtection !== null && { DeletionProtection: input.DeletionProtection }),
    ...(input.KmsKey !== undefined && input.KmsKey !== null && { KmsKey: input.KmsKey }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateLedgerPermissionsModeCommand = async (
  input: UpdateLedgerPermissionsModeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ledgers/{Name}/permissions-mode";
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.PermissionsMode !== undefined &&
      input.PermissionsMode !== null && { PermissionsMode: input.PermissionsMode }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

export const deserializeAws_restJson1CancelJournalKinesisStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelJournalKinesisStreamCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CancelJournalKinesisStreamCommandError(output, context);
  }
  const contents: CancelJournalKinesisStreamCommandOutput = {
    $metadata: deserializeMetadata(output),
    StreamId: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.StreamId !== undefined && data.StreamId !== null) {
    contents.StreamId = __expectString(data.StreamId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CancelJournalKinesisStreamCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelJournalKinesisStreamCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.qldb#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.qldb#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourcePreconditionNotMetException":
    case "com.amazonaws.qldb#ResourcePreconditionNotMetException":
      response = {
        ...(await deserializeAws_restJson1ResourcePreconditionNotMetExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateLedgerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLedgerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateLedgerCommandError(output, context);
  }
  const contents: CreateLedgerCommandOutput = {
    $metadata: deserializeMetadata(output),
    Arn: undefined,
    CreationDateTime: undefined,
    DeletionProtection: undefined,
    KmsKeyArn: undefined,
    Name: undefined,
    PermissionsMode: undefined,
    State: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn !== undefined && data.Arn !== null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.CreationDateTime !== undefined && data.CreationDateTime !== null) {
    contents.CreationDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreationDateTime)));
  }
  if (data.DeletionProtection !== undefined && data.DeletionProtection !== null) {
    contents.DeletionProtection = __expectBoolean(data.DeletionProtection);
  }
  if (data.KmsKeyArn !== undefined && data.KmsKeyArn !== null) {
    contents.KmsKeyArn = __expectString(data.KmsKeyArn);
  }
  if (data.Name !== undefined && data.Name !== null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.PermissionsMode !== undefined && data.PermissionsMode !== null) {
    contents.PermissionsMode = __expectString(data.PermissionsMode);
  }
  if (data.State !== undefined && data.State !== null) {
    contents.State = __expectString(data.State);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateLedgerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLedgerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.qldb#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.qldb#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.qldb#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.qldb#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteLedgerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLedgerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteLedgerCommandError(output, context);
  }
  const contents: DeleteLedgerCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteLedgerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLedgerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.qldb#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.qldb#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.qldb#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourcePreconditionNotMetException":
    case "com.amazonaws.qldb#ResourcePreconditionNotMetException":
      response = {
        ...(await deserializeAws_restJson1ResourcePreconditionNotMetExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DescribeJournalKinesisStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeJournalKinesisStreamCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeJournalKinesisStreamCommandError(output, context);
  }
  const contents: DescribeJournalKinesisStreamCommandOutput = {
    $metadata: deserializeMetadata(output),
    Stream: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Stream !== undefined && data.Stream !== null) {
    contents.Stream = deserializeAws_restJson1JournalKinesisStreamDescription(data.Stream, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeJournalKinesisStreamCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeJournalKinesisStreamCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.qldb#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.qldb#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourcePreconditionNotMetException":
    case "com.amazonaws.qldb#ResourcePreconditionNotMetException":
      response = {
        ...(await deserializeAws_restJson1ResourcePreconditionNotMetExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DescribeJournalS3ExportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeJournalS3ExportCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeJournalS3ExportCommandError(output, context);
  }
  const contents: DescribeJournalS3ExportCommandOutput = {
    $metadata: deserializeMetadata(output),
    ExportDescription: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ExportDescription !== undefined && data.ExportDescription !== null) {
    contents.ExportDescription = deserializeAws_restJson1JournalS3ExportDescription(data.ExportDescription, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeJournalS3ExportCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeJournalS3ExportCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.qldb#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DescribeLedgerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLedgerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeLedgerCommandError(output, context);
  }
  const contents: DescribeLedgerCommandOutput = {
    $metadata: deserializeMetadata(output),
    Arn: undefined,
    CreationDateTime: undefined,
    DeletionProtection: undefined,
    EncryptionDescription: undefined,
    Name: undefined,
    PermissionsMode: undefined,
    State: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn !== undefined && data.Arn !== null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.CreationDateTime !== undefined && data.CreationDateTime !== null) {
    contents.CreationDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreationDateTime)));
  }
  if (data.DeletionProtection !== undefined && data.DeletionProtection !== null) {
    contents.DeletionProtection = __expectBoolean(data.DeletionProtection);
  }
  if (data.EncryptionDescription !== undefined && data.EncryptionDescription !== null) {
    contents.EncryptionDescription = deserializeAws_restJson1LedgerEncryptionDescription(
      data.EncryptionDescription,
      context
    );
  }
  if (data.Name !== undefined && data.Name !== null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.PermissionsMode !== undefined && data.PermissionsMode !== null) {
    contents.PermissionsMode = __expectString(data.PermissionsMode);
  }
  if (data.State !== undefined && data.State !== null) {
    contents.State = __expectString(data.State);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeLedgerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLedgerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.qldb#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.qldb#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ExportJournalToS3Command = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportJournalToS3CommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ExportJournalToS3CommandError(output, context);
  }
  const contents: ExportJournalToS3CommandOutput = {
    $metadata: deserializeMetadata(output),
    ExportId: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ExportId !== undefined && data.ExportId !== null) {
    contents.ExportId = __expectString(data.ExportId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ExportJournalToS3CommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportJournalToS3CommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.qldb#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourcePreconditionNotMetException":
    case "com.amazonaws.qldb#ResourcePreconditionNotMetException":
      response = {
        ...(await deserializeAws_restJson1ResourcePreconditionNotMetExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetBlockCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBlockCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetBlockCommandError(output, context);
  }
  const contents: GetBlockCommandOutput = {
    $metadata: deserializeMetadata(output),
    Block: undefined,
    Proof: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Block !== undefined && data.Block !== null) {
    contents.Block = deserializeAws_restJson1ValueHolder(data.Block, context);
  }
  if (data.Proof !== undefined && data.Proof !== null) {
    contents.Proof = deserializeAws_restJson1ValueHolder(data.Proof, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetBlockCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBlockCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.qldb#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.qldb#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourcePreconditionNotMetException":
    case "com.amazonaws.qldb#ResourcePreconditionNotMetException":
      response = {
        ...(await deserializeAws_restJson1ResourcePreconditionNotMetExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetDigestCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDigestCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetDigestCommandError(output, context);
  }
  const contents: GetDigestCommandOutput = {
    $metadata: deserializeMetadata(output),
    Digest: undefined,
    DigestTipAddress: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Digest !== undefined && data.Digest !== null) {
    contents.Digest = context.base64Decoder(data.Digest);
  }
  if (data.DigestTipAddress !== undefined && data.DigestTipAddress !== null) {
    contents.DigestTipAddress = deserializeAws_restJson1ValueHolder(data.DigestTipAddress, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetDigestCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDigestCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.qldb#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.qldb#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourcePreconditionNotMetException":
    case "com.amazonaws.qldb#ResourcePreconditionNotMetException":
      response = {
        ...(await deserializeAws_restJson1ResourcePreconditionNotMetExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetRevisionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRevisionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetRevisionCommandError(output, context);
  }
  const contents: GetRevisionCommandOutput = {
    $metadata: deserializeMetadata(output),
    Proof: undefined,
    Revision: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Proof !== undefined && data.Proof !== null) {
    contents.Proof = deserializeAws_restJson1ValueHolder(data.Proof, context);
  }
  if (data.Revision !== undefined && data.Revision !== null) {
    contents.Revision = deserializeAws_restJson1ValueHolder(data.Revision, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetRevisionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRevisionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.qldb#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.qldb#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourcePreconditionNotMetException":
    case "com.amazonaws.qldb#ResourcePreconditionNotMetException":
      response = {
        ...(await deserializeAws_restJson1ResourcePreconditionNotMetExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListJournalKinesisStreamsForLedgerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJournalKinesisStreamsForLedgerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListJournalKinesisStreamsForLedgerCommandError(output, context);
  }
  const contents: ListJournalKinesisStreamsForLedgerCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    Streams: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Streams !== undefined && data.Streams !== null) {
    contents.Streams = deserializeAws_restJson1JournalKinesisStreamDescriptionList(data.Streams, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListJournalKinesisStreamsForLedgerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJournalKinesisStreamsForLedgerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.qldb#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.qldb#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourcePreconditionNotMetException":
    case "com.amazonaws.qldb#ResourcePreconditionNotMetException":
      response = {
        ...(await deserializeAws_restJson1ResourcePreconditionNotMetExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListJournalS3ExportsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJournalS3ExportsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListJournalS3ExportsCommandError(output, context);
  }
  const contents: ListJournalS3ExportsCommandOutput = {
    $metadata: deserializeMetadata(output),
    JournalS3Exports: undefined,
    NextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.JournalS3Exports !== undefined && data.JournalS3Exports !== null) {
    contents.JournalS3Exports = deserializeAws_restJson1JournalS3ExportList(data.JournalS3Exports, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListJournalS3ExportsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJournalS3ExportsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListJournalS3ExportsForLedgerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJournalS3ExportsForLedgerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListJournalS3ExportsForLedgerCommandError(output, context);
  }
  const contents: ListJournalS3ExportsForLedgerCommandOutput = {
    $metadata: deserializeMetadata(output),
    JournalS3Exports: undefined,
    NextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.JournalS3Exports !== undefined && data.JournalS3Exports !== null) {
    contents.JournalS3Exports = deserializeAws_restJson1JournalS3ExportList(data.JournalS3Exports, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListJournalS3ExportsForLedgerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJournalS3ExportsForLedgerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListLedgersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLedgersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListLedgersCommandError(output, context);
  }
  const contents: ListLedgersCommandOutput = {
    $metadata: deserializeMetadata(output),
    Ledgers: undefined,
    NextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Ledgers !== undefined && data.Ledgers !== null) {
    contents.Ledgers = deserializeAws_restJson1LedgerList(data.Ledgers, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListLedgersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLedgersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTagsForResourceCommandError(output, context);
  }
  const contents: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    Tags: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Tags !== undefined && data.Tags !== null) {
    contents.Tags = deserializeAws_restJson1Tags(data.Tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.qldb#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.qldb#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1StreamJournalToKinesisCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StreamJournalToKinesisCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StreamJournalToKinesisCommandError(output, context);
  }
  const contents: StreamJournalToKinesisCommandOutput = {
    $metadata: deserializeMetadata(output),
    StreamId: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.StreamId !== undefined && data.StreamId !== null) {
    contents.StreamId = __expectString(data.StreamId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1StreamJournalToKinesisCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StreamJournalToKinesisCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.qldb#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.qldb#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourcePreconditionNotMetException":
    case "com.amazonaws.qldb#ResourcePreconditionNotMetException":
      response = {
        ...(await deserializeAws_restJson1ResourcePreconditionNotMetExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1TagResourceCommandError(output, context);
  }
  const contents: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.qldb#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.qldb#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UntagResourceCommandError(output, context);
  }
  const contents: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.qldb#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.qldb#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateLedgerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLedgerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateLedgerCommandError(output, context);
  }
  const contents: UpdateLedgerCommandOutput = {
    $metadata: deserializeMetadata(output),
    Arn: undefined,
    CreationDateTime: undefined,
    DeletionProtection: undefined,
    EncryptionDescription: undefined,
    Name: undefined,
    State: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn !== undefined && data.Arn !== null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.CreationDateTime !== undefined && data.CreationDateTime !== null) {
    contents.CreationDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreationDateTime)));
  }
  if (data.DeletionProtection !== undefined && data.DeletionProtection !== null) {
    contents.DeletionProtection = __expectBoolean(data.DeletionProtection);
  }
  if (data.EncryptionDescription !== undefined && data.EncryptionDescription !== null) {
    contents.EncryptionDescription = deserializeAws_restJson1LedgerEncryptionDescription(
      data.EncryptionDescription,
      context
    );
  }
  if (data.Name !== undefined && data.Name !== null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.State !== undefined && data.State !== null) {
    contents.State = __expectString(data.State);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateLedgerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLedgerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.qldb#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.qldb#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateLedgerPermissionsModeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLedgerPermissionsModeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateLedgerPermissionsModeCommandError(output, context);
  }
  const contents: UpdateLedgerPermissionsModeCommandOutput = {
    $metadata: deserializeMetadata(output),
    Arn: undefined,
    Name: undefined,
    PermissionsMode: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn !== undefined && data.Arn !== null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.Name !== undefined && data.Name !== null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.PermissionsMode !== undefined && data.PermissionsMode !== null) {
    contents.PermissionsMode = __expectString(data.PermissionsMode);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateLedgerPermissionsModeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLedgerPermissionsModeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.qldb#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.qldb#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

const deserializeAws_restJson1InvalidParameterExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterException> => {
  const contents: InvalidParameterException = {
    name: "InvalidParameterException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
    ParameterName: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.ParameterName !== undefined && data.ParameterName !== null) {
    contents.ParameterName = __expectString(data.ParameterName);
  }
  return contents;
};

const deserializeAws_restJson1LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const contents: LimitExceededException = {
    name: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
    ResourceType: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.ResourceType !== undefined && data.ResourceType !== null) {
    contents.ResourceType = __expectString(data.ResourceType);
  }
  return contents;
};

const deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceAlreadyExistsException> => {
  const contents: ResourceAlreadyExistsException = {
    name: "ResourceAlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
    ResourceName: undefined,
    ResourceType: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.ResourceName !== undefined && data.ResourceName !== null) {
    contents.ResourceName = __expectString(data.ResourceName);
  }
  if (data.ResourceType !== undefined && data.ResourceType !== null) {
    contents.ResourceType = __expectString(data.ResourceType);
  }
  return contents;
};

const deserializeAws_restJson1ResourceInUseExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceInUseException> => {
  const contents: ResourceInUseException = {
    name: "ResourceInUseException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
    ResourceName: undefined,
    ResourceType: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.ResourceName !== undefined && data.ResourceName !== null) {
    contents.ResourceName = __expectString(data.ResourceName);
  }
  if (data.ResourceType !== undefined && data.ResourceType !== null) {
    contents.ResourceType = __expectString(data.ResourceType);
  }
  return contents;
};

const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
    ResourceName: undefined,
    ResourceType: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.ResourceName !== undefined && data.ResourceName !== null) {
    contents.ResourceName = __expectString(data.ResourceName);
  }
  if (data.ResourceType !== undefined && data.ResourceType !== null) {
    contents.ResourceType = __expectString(data.ResourceType);
  }
  return contents;
};

const deserializeAws_restJson1ResourcePreconditionNotMetExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourcePreconditionNotMetException> => {
  const contents: ResourcePreconditionNotMetException = {
    name: "ResourcePreconditionNotMetException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
    ResourceName: undefined,
    ResourceType: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.ResourceName !== undefined && data.ResourceName !== null) {
    contents.ResourceName = __expectString(data.ResourceName);
  }
  if (data.ResourceType !== undefined && data.ResourceType !== null) {
    contents.ResourceType = __expectString(data.ResourceType);
  }
  return contents;
};

const serializeAws_restJson1KinesisConfiguration = (input: KinesisConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.AggregationEnabled !== undefined &&
      input.AggregationEnabled !== null && { AggregationEnabled: input.AggregationEnabled }),
    ...(input.StreamArn !== undefined && input.StreamArn !== null && { StreamArn: input.StreamArn }),
  };
};

const serializeAws_restJson1S3EncryptionConfiguration = (
  input: S3EncryptionConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.KmsKeyArn !== undefined && input.KmsKeyArn !== null && { KmsKeyArn: input.KmsKeyArn }),
    ...(input.ObjectEncryptionType !== undefined &&
      input.ObjectEncryptionType !== null && { ObjectEncryptionType: input.ObjectEncryptionType }),
  };
};

const serializeAws_restJson1S3ExportConfiguration = (input: S3ExportConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.Bucket !== undefined && input.Bucket !== null && { Bucket: input.Bucket }),
    ...(input.EncryptionConfiguration !== undefined &&
      input.EncryptionConfiguration !== null && {
        EncryptionConfiguration: serializeAws_restJson1S3EncryptionConfiguration(
          input.EncryptionConfiguration,
          context
        ),
      }),
    ...(input.Prefix !== undefined && input.Prefix !== null && { Prefix: input.Prefix }),
  };
};

const serializeAws_restJson1Tags = (input: { [key: string]: string }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return { ...acc, [key]: null as any };
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_restJson1ValueHolder = (input: ValueHolder, context: __SerdeContext): any => {
  return {
    ...(input.IonText !== undefined && input.IonText !== null && { IonText: input.IonText }),
  };
};

const deserializeAws_restJson1JournalKinesisStreamDescription = (
  output: any,
  context: __SerdeContext
): JournalKinesisStreamDescription => {
  return {
    Arn: __expectString(output.Arn),
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    ErrorCause: __expectString(output.ErrorCause),
    ExclusiveEndTime:
      output.ExclusiveEndTime !== undefined && output.ExclusiveEndTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ExclusiveEndTime)))
        : undefined,
    InclusiveStartTime:
      output.InclusiveStartTime !== undefined && output.InclusiveStartTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.InclusiveStartTime)))
        : undefined,
    KinesisConfiguration:
      output.KinesisConfiguration !== undefined && output.KinesisConfiguration !== null
        ? deserializeAws_restJson1KinesisConfiguration(output.KinesisConfiguration, context)
        : undefined,
    LedgerName: __expectString(output.LedgerName),
    RoleArn: __expectString(output.RoleArn),
    Status: __expectString(output.Status),
    StreamId: __expectString(output.StreamId),
    StreamName: __expectString(output.StreamName),
  } as any;
};

const deserializeAws_restJson1JournalKinesisStreamDescriptionList = (
  output: any,
  context: __SerdeContext
): JournalKinesisStreamDescription[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1JournalKinesisStreamDescription(entry, context);
    });
};

const deserializeAws_restJson1JournalS3ExportDescription = (
  output: any,
  context: __SerdeContext
): JournalS3ExportDescription => {
  return {
    ExclusiveEndTime:
      output.ExclusiveEndTime !== undefined && output.ExclusiveEndTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ExclusiveEndTime)))
        : undefined,
    ExportCreationTime:
      output.ExportCreationTime !== undefined && output.ExportCreationTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ExportCreationTime)))
        : undefined,
    ExportId: __expectString(output.ExportId),
    InclusiveStartTime:
      output.InclusiveStartTime !== undefined && output.InclusiveStartTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.InclusiveStartTime)))
        : undefined,
    LedgerName: __expectString(output.LedgerName),
    RoleArn: __expectString(output.RoleArn),
    S3ExportConfiguration:
      output.S3ExportConfiguration !== undefined && output.S3ExportConfiguration !== null
        ? deserializeAws_restJson1S3ExportConfiguration(output.S3ExportConfiguration, context)
        : undefined,
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_restJson1JournalS3ExportList = (
  output: any,
  context: __SerdeContext
): JournalS3ExportDescription[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1JournalS3ExportDescription(entry, context);
    });
};

const deserializeAws_restJson1KinesisConfiguration = (output: any, context: __SerdeContext): KinesisConfiguration => {
  return {
    AggregationEnabled: __expectBoolean(output.AggregationEnabled),
    StreamArn: __expectString(output.StreamArn),
  } as any;
};

const deserializeAws_restJson1LedgerEncryptionDescription = (
  output: any,
  context: __SerdeContext
): LedgerEncryptionDescription => {
  return {
    EncryptionStatus: __expectString(output.EncryptionStatus),
    InaccessibleKmsKeyDateTime:
      output.InaccessibleKmsKeyDateTime !== undefined && output.InaccessibleKmsKeyDateTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.InaccessibleKmsKeyDateTime)))
        : undefined,
    KmsKeyArn: __expectString(output.KmsKeyArn),
  } as any;
};

const deserializeAws_restJson1LedgerList = (output: any, context: __SerdeContext): LedgerSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1LedgerSummary(entry, context);
    });
};

const deserializeAws_restJson1LedgerSummary = (output: any, context: __SerdeContext): LedgerSummary => {
  return {
    CreationDateTime:
      output.CreationDateTime !== undefined && output.CreationDateTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationDateTime)))
        : undefined,
    Name: __expectString(output.Name),
    State: __expectString(output.State),
  } as any;
};

const deserializeAws_restJson1S3EncryptionConfiguration = (
  output: any,
  context: __SerdeContext
): S3EncryptionConfiguration => {
  return {
    KmsKeyArn: __expectString(output.KmsKeyArn),
    ObjectEncryptionType: __expectString(output.ObjectEncryptionType),
  } as any;
};

const deserializeAws_restJson1S3ExportConfiguration = (output: any, context: __SerdeContext): S3ExportConfiguration => {
  return {
    Bucket: __expectString(output.Bucket),
    EncryptionConfiguration:
      output.EncryptionConfiguration !== undefined && output.EncryptionConfiguration !== null
        ? deserializeAws_restJson1S3EncryptionConfiguration(output.EncryptionConfiguration, context)
        : undefined,
    Prefix: __expectString(output.Prefix),
  } as any;
};

const deserializeAws_restJson1Tags = (output: any, context: __SerdeContext): { [key: string]: string } => {
  return Object.entries(output).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return { ...acc, [key]: null as any };
    }
    return {
      ...acc,
      [key]: __expectString(value) as any,
    };
  }, {});
};

const deserializeAws_restJson1ValueHolder = (output: any, context: __SerdeContext): ValueHolder => {
  return {
    IonText: __expectString(output.IonText),
  } as any;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody: any = new Uint8Array(), context: __SerdeContext): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== null &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string): string => {
    let cleanValue = rawValue;
    if (cleanValue.indexOf(":") >= 0) {
      cleanValue = cleanValue.split(":")[0];
    }
    if (cleanValue.indexOf("#") >= 0) {
      cleanValue = cleanValue.split("#")[1];
    }
    return cleanValue;
  };

  const headerKey = findKey(output.headers, "x-amzn-errortype");
  if (headerKey !== undefined) {
    return sanitizeErrorCode(output.headers[headerKey]);
  }

  if (data.code !== undefined) {
    return sanitizeErrorCode(data.code);
  }

  if (data["__type"] !== undefined) {
    return sanitizeErrorCode(data["__type"]);
  }

  return "";
};
