import { ServiceDiscoveryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceDiscoveryClient";
import { DeregisterInstanceRequest, DeregisterInstanceResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeregisterInstanceCommandInput = DeregisterInstanceRequest;
export declare type DeregisterInstanceCommandOutput = DeregisterInstanceResponse & __MetadataBearer;
export declare class DeregisterInstanceCommand extends $Command<DeregisterInstanceCommandInput, DeregisterInstanceCommandOutput, ServiceDiscoveryClientResolvedConfig> {
    readonly input: DeregisterInstanceCommandInput;
    constructor(input: DeregisterInstanceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceDiscoveryClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeregisterInstanceCommandInput, DeregisterInstanceCommandOutput>;
    private serialize;
    private deserialize;
}
