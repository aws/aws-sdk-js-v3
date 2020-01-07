import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";
import { DeregisterFromWorkMailRequest, DeregisterFromWorkMailResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeregisterFromWorkMailCommandInput = DeregisterFromWorkMailRequest;
export declare type DeregisterFromWorkMailCommandOutput = DeregisterFromWorkMailResponse & __MetadataBearer;
export declare class DeregisterFromWorkMailCommand extends $Command<DeregisterFromWorkMailCommandInput, DeregisterFromWorkMailCommandOutput, WorkMailClientResolvedConfig> {
    readonly input: DeregisterFromWorkMailCommandInput;
    constructor(input: DeregisterFromWorkMailCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkMailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeregisterFromWorkMailCommandInput, DeregisterFromWorkMailCommandOutput>;
    private serialize;
    private deserialize;
}
