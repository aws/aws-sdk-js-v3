import { ServiceDiscoveryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceDiscoveryClient";
import { GetOperationRequest, GetOperationResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetOperationCommandInput = GetOperationRequest;
export declare type GetOperationCommandOutput = GetOperationResponse & __MetadataBearer;
export declare class GetOperationCommand extends $Command<GetOperationCommandInput, GetOperationCommandOutput, ServiceDiscoveryClientResolvedConfig> {
    readonly input: GetOperationCommandInput;
    constructor(input: GetOperationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceDiscoveryClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetOperationCommandInput, GetOperationCommandOutput>;
    private serialize;
    private deserialize;
}
