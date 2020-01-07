import { ServiceDiscoveryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceDiscoveryClient";
import { RegisterInstanceRequest, RegisterInstanceResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RegisterInstanceCommandInput = RegisterInstanceRequest;
export declare type RegisterInstanceCommandOutput = RegisterInstanceResponse & __MetadataBearer;
export declare class RegisterInstanceCommand extends $Command<RegisterInstanceCommandInput, RegisterInstanceCommandOutput, ServiceDiscoveryClientResolvedConfig> {
    readonly input: RegisterInstanceCommandInput;
    constructor(input: RegisterInstanceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceDiscoveryClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RegisterInstanceCommandInput, RegisterInstanceCommandOutput>;
    private serialize;
    private deserialize;
}
