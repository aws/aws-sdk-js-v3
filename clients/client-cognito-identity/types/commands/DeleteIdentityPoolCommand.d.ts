import { CognitoIdentityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityClient";
import { DeleteIdentityPoolInput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteIdentityPoolCommandInput = DeleteIdentityPoolInput;
export declare type DeleteIdentityPoolCommandOutput = __MetadataBearer;
export declare class DeleteIdentityPoolCommand extends $Command<DeleteIdentityPoolCommandInput, DeleteIdentityPoolCommandOutput, CognitoIdentityClientResolvedConfig> {
    readonly input: DeleteIdentityPoolCommandInput;
    constructor(input: DeleteIdentityPoolCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteIdentityPoolCommandInput, DeleteIdentityPoolCommandOutput>;
    private serialize;
    private deserialize;
}
