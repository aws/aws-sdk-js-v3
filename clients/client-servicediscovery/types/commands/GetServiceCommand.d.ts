import { ServiceDiscoveryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceDiscoveryClient";
import { GetServiceRequest, GetServiceResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetServiceCommandInput = GetServiceRequest;
export declare type GetServiceCommandOutput = GetServiceResponse & __MetadataBearer;
export declare class GetServiceCommand extends $Command<GetServiceCommandInput, GetServiceCommandOutput, ServiceDiscoveryClientResolvedConfig> {
    readonly input: GetServiceCommandInput;
    constructor(input: GetServiceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceDiscoveryClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetServiceCommandInput, GetServiceCommandOutput>;
    private serialize;
    private deserialize;
}
