import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { GetAccountAuthorizationDetailsRequest, GetAccountAuthorizationDetailsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetAccountAuthorizationDetailsCommandInput = GetAccountAuthorizationDetailsRequest;
export declare type GetAccountAuthorizationDetailsCommandOutput = GetAccountAuthorizationDetailsResponse & __MetadataBearer;
export declare class GetAccountAuthorizationDetailsCommand extends $Command<GetAccountAuthorizationDetailsCommandInput, GetAccountAuthorizationDetailsCommandOutput, IAMClientResolvedConfig> {
    readonly input: GetAccountAuthorizationDetailsCommandInput;
    constructor(input: GetAccountAuthorizationDetailsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetAccountAuthorizationDetailsCommandInput, GetAccountAuthorizationDetailsCommandOutput>;
    private serialize;
    private deserialize;
}
