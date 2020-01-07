import { ServiceDiscoveryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceDiscoveryClient";
import { GetInstancesHealthStatusRequest, GetInstancesHealthStatusResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetInstancesHealthStatusCommandInput = GetInstancesHealthStatusRequest;
export declare type GetInstancesHealthStatusCommandOutput = GetInstancesHealthStatusResponse & __MetadataBearer;
export declare class GetInstancesHealthStatusCommand extends $Command<GetInstancesHealthStatusCommandInput, GetInstancesHealthStatusCommandOutput, ServiceDiscoveryClientResolvedConfig> {
    readonly input: GetInstancesHealthStatusCommandInput;
    constructor(input: GetInstancesHealthStatusCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceDiscoveryClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetInstancesHealthStatusCommandInput, GetInstancesHealthStatusCommandOutput>;
    private serialize;
    private deserialize;
}
