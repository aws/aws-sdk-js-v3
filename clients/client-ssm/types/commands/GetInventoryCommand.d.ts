import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { GetInventoryRequest, GetInventoryResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetInventoryCommandInput = GetInventoryRequest;
export declare type GetInventoryCommandOutput = GetInventoryResult & __MetadataBearer;
export declare class GetInventoryCommand extends $Command<GetInventoryCommandInput, GetInventoryCommandOutput, SSMClientResolvedConfig> {
    readonly input: GetInventoryCommandInput;
    constructor(input: GetInventoryCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetInventoryCommandInput, GetInventoryCommandOutput>;
    private serialize;
    private deserialize;
}
