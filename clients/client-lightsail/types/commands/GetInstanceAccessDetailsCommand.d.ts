import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetInstanceAccessDetailsRequest, GetInstanceAccessDetailsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetInstanceAccessDetailsCommandInput = GetInstanceAccessDetailsRequest;
export declare type GetInstanceAccessDetailsCommandOutput = GetInstanceAccessDetailsResult & __MetadataBearer;
export declare class GetInstanceAccessDetailsCommand extends $Command<GetInstanceAccessDetailsCommandInput, GetInstanceAccessDetailsCommandOutput, LightsailClientResolvedConfig> {
    readonly input: GetInstanceAccessDetailsCommandInput;
    constructor(input: GetInstanceAccessDetailsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetInstanceAccessDetailsCommandInput, GetInstanceAccessDetailsCommandOutput>;
    private serialize;
    private deserialize;
}
