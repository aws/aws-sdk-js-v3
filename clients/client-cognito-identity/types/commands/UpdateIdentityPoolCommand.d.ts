import { CognitoIdentityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityClient";
import { IdentityPool } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateIdentityPoolCommandInput = IdentityPool;
export declare type UpdateIdentityPoolCommandOutput = IdentityPool & __MetadataBearer;
export declare class UpdateIdentityPoolCommand extends $Command<UpdateIdentityPoolCommandInput, UpdateIdentityPoolCommandOutput, CognitoIdentityClientResolvedConfig> {
    readonly input: UpdateIdentityPoolCommandInput;
    constructor(input: UpdateIdentityPoolCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateIdentityPoolCommandInput, UpdateIdentityPoolCommandOutput>;
    private serialize;
    private deserialize;
}
