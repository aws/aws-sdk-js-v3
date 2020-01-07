import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { GetCSVHeaderRequest, GetCSVHeaderResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetCSVHeaderCommandInput = GetCSVHeaderRequest;
export declare type GetCSVHeaderCommandOutput = GetCSVHeaderResponse & __MetadataBearer;
export declare class GetCSVHeaderCommand extends $Command<GetCSVHeaderCommandInput, GetCSVHeaderCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: GetCSVHeaderCommandInput;
    constructor(input: GetCSVHeaderCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetCSVHeaderCommandInput, GetCSVHeaderCommandOutput>;
    private serialize;
    private deserialize;
}
