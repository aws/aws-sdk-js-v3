import { CognitoIdentityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityClient";
import { CreateIdentityPoolInput, IdentityPool } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateIdentityPoolCommandInput = CreateIdentityPoolInput;
export declare type CreateIdentityPoolCommandOutput = IdentityPool & __MetadataBearer;
export declare class CreateIdentityPoolCommand extends $Command<CreateIdentityPoolCommandInput, CreateIdentityPoolCommandOutput, CognitoIdentityClientResolvedConfig> {
    readonly input: CreateIdentityPoolCommandInput;
    constructor(input: CreateIdentityPoolCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateIdentityPoolCommandInput, CreateIdentityPoolCommandOutput>;
    private serialize;
    private deserialize;
}
