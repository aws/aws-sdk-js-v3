import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import { AcceptHandshakeRequest, AcceptHandshakeResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AcceptHandshakeCommandInput = AcceptHandshakeRequest;
export declare type AcceptHandshakeCommandOutput = AcceptHandshakeResponse & __MetadataBearer;
export declare class AcceptHandshakeCommand extends $Command<AcceptHandshakeCommandInput, AcceptHandshakeCommandOutput, OrganizationsClientResolvedConfig> {
    readonly input: AcceptHandshakeCommandInput;
    constructor(input: AcceptHandshakeCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OrganizationsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AcceptHandshakeCommandInput, AcceptHandshakeCommandOutput>;
    private serialize;
    private deserialize;
}
