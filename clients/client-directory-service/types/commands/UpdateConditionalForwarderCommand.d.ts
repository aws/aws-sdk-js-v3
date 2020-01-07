import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { UpdateConditionalForwarderRequest, UpdateConditionalForwarderResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateConditionalForwarderCommandInput = UpdateConditionalForwarderRequest;
export declare type UpdateConditionalForwarderCommandOutput = UpdateConditionalForwarderResult & __MetadataBearer;
export declare class UpdateConditionalForwarderCommand extends $Command<UpdateConditionalForwarderCommandInput, UpdateConditionalForwarderCommandOutput, DirectoryServiceClientResolvedConfig> {
    readonly input: UpdateConditionalForwarderCommandInput;
    constructor(input: UpdateConditionalForwarderCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectoryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateConditionalForwarderCommandInput, UpdateConditionalForwarderCommandOutput>;
    private serialize;
    private deserialize;
}
