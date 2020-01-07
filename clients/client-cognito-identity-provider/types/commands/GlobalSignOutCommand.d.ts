import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { GlobalSignOutRequest, GlobalSignOutResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GlobalSignOutCommandInput = GlobalSignOutRequest;
export declare type GlobalSignOutCommandOutput = GlobalSignOutResponse & __MetadataBearer;
export declare class GlobalSignOutCommand extends $Command<GlobalSignOutCommandInput, GlobalSignOutCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: GlobalSignOutCommandInput;
    constructor(input: GlobalSignOutCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GlobalSignOutCommandInput, GlobalSignOutCommandOutput>;
    private serialize;
    private deserialize;
}
