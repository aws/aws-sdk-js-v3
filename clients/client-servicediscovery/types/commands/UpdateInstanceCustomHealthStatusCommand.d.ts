import { ServiceDiscoveryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceDiscoveryClient";
import { UpdateInstanceCustomHealthStatusRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateInstanceCustomHealthStatusCommandInput = UpdateInstanceCustomHealthStatusRequest;
export declare type UpdateInstanceCustomHealthStatusCommandOutput = __MetadataBearer;
export declare class UpdateInstanceCustomHealthStatusCommand extends $Command<UpdateInstanceCustomHealthStatusCommandInput, UpdateInstanceCustomHealthStatusCommandOutput, ServiceDiscoveryClientResolvedConfig> {
    readonly input: UpdateInstanceCustomHealthStatusCommandInput;
    constructor(input: UpdateInstanceCustomHealthStatusCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceDiscoveryClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateInstanceCustomHealthStatusCommandInput, UpdateInstanceCustomHealthStatusCommandOutput>;
    private serialize;
    private deserialize;
}
