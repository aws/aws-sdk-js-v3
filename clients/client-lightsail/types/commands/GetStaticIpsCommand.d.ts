import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetStaticIpsRequest, GetStaticIpsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetStaticIpsCommandInput = GetStaticIpsRequest;
export declare type GetStaticIpsCommandOutput = GetStaticIpsResult & __MetadataBearer;
export declare class GetStaticIpsCommand extends $Command<GetStaticIpsCommandInput, GetStaticIpsCommandOutput, LightsailClientResolvedConfig> {
    readonly input: GetStaticIpsCommandInput;
    constructor(input: GetStaticIpsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetStaticIpsCommandInput, GetStaticIpsCommandOutput>;
    private serialize;
    private deserialize;
}
