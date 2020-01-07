import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { GetServiceLastAccessedDetailsRequest, GetServiceLastAccessedDetailsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetServiceLastAccessedDetailsCommandInput = GetServiceLastAccessedDetailsRequest;
export declare type GetServiceLastAccessedDetailsCommandOutput = GetServiceLastAccessedDetailsResponse & __MetadataBearer;
export declare class GetServiceLastAccessedDetailsCommand extends $Command<GetServiceLastAccessedDetailsCommandInput, GetServiceLastAccessedDetailsCommandOutput, IAMClientResolvedConfig> {
    readonly input: GetServiceLastAccessedDetailsCommandInput;
    constructor(input: GetServiceLastAccessedDetailsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetServiceLastAccessedDetailsCommandInput, GetServiceLastAccessedDetailsCommandOutput>;
    private serialize;
    private deserialize;
}
