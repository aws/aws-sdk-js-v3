import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { GetOpsItemRequest, GetOpsItemResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetOpsItemCommandInput = GetOpsItemRequest;
export declare type GetOpsItemCommandOutput = GetOpsItemResponse & __MetadataBearer;
export declare class GetOpsItemCommand extends $Command<GetOpsItemCommandInput, GetOpsItemCommandOutput, SSMClientResolvedConfig> {
    readonly input: GetOpsItemCommandInput;
    constructor(input: GetOpsItemCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetOpsItemCommandInput, GetOpsItemCommandOutput>;
    private serialize;
    private deserialize;
}
