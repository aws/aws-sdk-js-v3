import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetOperationRequest, GetOperationResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetOperationCommandInput = GetOperationRequest;
export declare type GetOperationCommandOutput = GetOperationResult & __MetadataBearer;
export declare class GetOperationCommand extends $Command<GetOperationCommandInput, GetOperationCommandOutput, LightsailClientResolvedConfig> {
    readonly input: GetOperationCommandInput;
    constructor(input: GetOperationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetOperationCommandInput, GetOperationCommandOutput>;
    private serialize;
    private deserialize;
}
