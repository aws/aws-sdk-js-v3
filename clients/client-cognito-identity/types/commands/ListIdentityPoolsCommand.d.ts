import { CognitoIdentityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityClient";
import { ListIdentityPoolsInput, ListIdentityPoolsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListIdentityPoolsCommandInput = ListIdentityPoolsInput;
export declare type ListIdentityPoolsCommandOutput = ListIdentityPoolsResponse & __MetadataBearer;
export declare class ListIdentityPoolsCommand extends $Command<ListIdentityPoolsCommandInput, ListIdentityPoolsCommandOutput, CognitoIdentityClientResolvedConfig> {
    readonly input: ListIdentityPoolsCommandInput;
    constructor(input: ListIdentityPoolsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListIdentityPoolsCommandInput, ListIdentityPoolsCommandOutput>;
    private serialize;
    private deserialize;
}
