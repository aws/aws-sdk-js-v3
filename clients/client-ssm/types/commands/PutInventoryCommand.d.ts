import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { PutInventoryRequest, PutInventoryResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutInventoryCommandInput = PutInventoryRequest;
export declare type PutInventoryCommandOutput = PutInventoryResult & __MetadataBearer;
export declare class PutInventoryCommand extends $Command<PutInventoryCommandInput, PutInventoryCommandOutput, SSMClientResolvedConfig> {
    readonly input: PutInventoryCommandInput;
    constructor(input: PutInventoryCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutInventoryCommandInput, PutInventoryCommandOutput>;
    private serialize;
    private deserialize;
}
