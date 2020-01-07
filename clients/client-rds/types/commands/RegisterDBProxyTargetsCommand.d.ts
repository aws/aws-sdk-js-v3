import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { RegisterDBProxyTargetsRequest, RegisterDBProxyTargetsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RegisterDBProxyTargetsCommandInput = RegisterDBProxyTargetsRequest;
export declare type RegisterDBProxyTargetsCommandOutput = RegisterDBProxyTargetsResponse & __MetadataBearer;
export declare class RegisterDBProxyTargetsCommand extends $Command<RegisterDBProxyTargetsCommandInput, RegisterDBProxyTargetsCommandOutput, RDSClientResolvedConfig> {
    readonly input: RegisterDBProxyTargetsCommandInput;
    constructor(input: RegisterDBProxyTargetsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RegisterDBProxyTargetsCommandInput, RegisterDBProxyTargetsCommandOutput>;
    private serialize;
    private deserialize;
}
