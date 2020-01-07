import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import { DeclineHandshakeRequest, DeclineHandshakeResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeclineHandshakeCommandInput = DeclineHandshakeRequest;
export declare type DeclineHandshakeCommandOutput = DeclineHandshakeResponse & __MetadataBearer;
export declare class DeclineHandshakeCommand extends $Command<DeclineHandshakeCommandInput, DeclineHandshakeCommandOutput, OrganizationsClientResolvedConfig> {
    readonly input: DeclineHandshakeCommandInput;
    constructor(input: DeclineHandshakeCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OrganizationsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeclineHandshakeCommandInput, DeclineHandshakeCommandOutput>;
    private serialize;
    private deserialize;
}
