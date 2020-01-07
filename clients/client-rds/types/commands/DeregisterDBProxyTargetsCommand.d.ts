import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DeregisterDBProxyTargetsRequest, DeregisterDBProxyTargetsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeregisterDBProxyTargetsCommandInput = DeregisterDBProxyTargetsRequest;
export declare type DeregisterDBProxyTargetsCommandOutput = DeregisterDBProxyTargetsResponse & __MetadataBearer;
export declare class DeregisterDBProxyTargetsCommand extends $Command<DeregisterDBProxyTargetsCommandInput, DeregisterDBProxyTargetsCommandOutput, RDSClientResolvedConfig> {
    readonly input: DeregisterDBProxyTargetsCommandInput;
    constructor(input: DeregisterDBProxyTargetsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeregisterDBProxyTargetsCommandInput, DeregisterDBProxyTargetsCommandOutput>;
    private serialize;
    private deserialize;
}
