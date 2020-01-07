import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetOperationsRequest, GetOperationsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetOperationsCommandInput = GetOperationsRequest;
export declare type GetOperationsCommandOutput = GetOperationsResult & __MetadataBearer;
export declare class GetOperationsCommand extends $Command<GetOperationsCommandInput, GetOperationsCommandOutput, LightsailClientResolvedConfig> {
    readonly input: GetOperationsCommandInput;
    constructor(input: GetOperationsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetOperationsCommandInput, GetOperationsCommandOutput>;
    private serialize;
    private deserialize;
}
