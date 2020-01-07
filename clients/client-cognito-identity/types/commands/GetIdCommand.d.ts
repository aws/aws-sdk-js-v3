import { CognitoIdentityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityClient";
import { GetIdInput, GetIdResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetIdCommandInput = GetIdInput;
export declare type GetIdCommandOutput = GetIdResponse & __MetadataBearer;
export declare class GetIdCommand extends $Command<GetIdCommandInput, GetIdCommandOutput, CognitoIdentityClientResolvedConfig> {
    readonly input: GetIdCommandInput;
    constructor(input: GetIdCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetIdCommandInput, GetIdCommandOutput>;
    private serialize;
    private deserialize;
}
