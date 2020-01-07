import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import { CancelHandshakeRequest, CancelHandshakeResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CancelHandshakeCommandInput = CancelHandshakeRequest;
export declare type CancelHandshakeCommandOutput = CancelHandshakeResponse & __MetadataBearer;
export declare class CancelHandshakeCommand extends $Command<CancelHandshakeCommandInput, CancelHandshakeCommandOutput, OrganizationsClientResolvedConfig> {
    readonly input: CancelHandshakeCommandInput;
    constructor(input: CancelHandshakeCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OrganizationsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CancelHandshakeCommandInput, CancelHandshakeCommandOutput>;
    private serialize;
    private deserialize;
}
