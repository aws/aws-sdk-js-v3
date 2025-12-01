// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSSHPublicKeysCommand,
  ListSSHPublicKeysCommandInput,
  ListSSHPublicKeysCommandOutput,
} from "../commands/ListSSHPublicKeysCommand";
import { IAMClient } from "../IAMClient";
import { IAMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSSHPublicKeys: (
  config: IAMPaginationConfiguration,
  input: ListSSHPublicKeysCommandInput,
  ...rest: any[]
) => Paginator<ListSSHPublicKeysCommandOutput> = createPaginator<
  IAMPaginationConfiguration,
  ListSSHPublicKeysCommandInput,
  ListSSHPublicKeysCommandOutput
>(IAMClient, ListSSHPublicKeysCommand, "Marker", "Marker", "MaxItems");
