import { LicenseManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LicenseManagerClient";
import { ListResourceInventoryRequest, ListResourceInventoryResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListResourceInventoryCommandInput = ListResourceInventoryRequest;
export declare type ListResourceInventoryCommandOutput = ListResourceInventoryResponse & __MetadataBearer;
export declare class ListResourceInventoryCommand extends $Command<ListResourceInventoryCommandInput, ListResourceInventoryCommandOutput, LicenseManagerClientResolvedConfig> {
    readonly input: ListResourceInventoryCommandInput;
    constructor(input: ListResourceInventoryCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LicenseManagerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListResourceInventoryCommandInput, ListResourceInventoryCommandOutput>;
    private serialize;
    private deserialize;
}
