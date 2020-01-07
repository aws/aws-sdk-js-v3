import { CognitoIdentityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityClient";
import { SetIdentityPoolRolesInput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type SetIdentityPoolRolesCommandInput = SetIdentityPoolRolesInput;
export declare type SetIdentityPoolRolesCommandOutput = __MetadataBearer;
export declare class SetIdentityPoolRolesCommand extends $Command<SetIdentityPoolRolesCommandInput, SetIdentityPoolRolesCommandOutput, CognitoIdentityClientResolvedConfig> {
    readonly input: SetIdentityPoolRolesCommandInput;
    constructor(input: SetIdentityPoolRolesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SetIdentityPoolRolesCommandInput, SetIdentityPoolRolesCommandOutput>;
    private serialize;
    private deserialize;
}
