import { ServiceInputTypes, ServiceOutputTypes, WAFClientResolvedConfig } from "../WAFClient";
import { GetChangeTokenRequest, GetChangeTokenResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetChangeTokenCommandInput = GetChangeTokenRequest;
export declare type GetChangeTokenCommandOutput = GetChangeTokenResponse & __MetadataBearer;
export declare class GetChangeTokenCommand extends $Command<GetChangeTokenCommandInput, GetChangeTokenCommandOutput, WAFClientResolvedConfig> {
    readonly input: GetChangeTokenCommandInput;
    constructor(input: GetChangeTokenCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetChangeTokenCommandInput, GetChangeTokenCommandOutput>;
    private serialize;
    private deserialize;
}
