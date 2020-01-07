import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { SetIdentityDkimEnabledRequest, SetIdentityDkimEnabledResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type SetIdentityDkimEnabledCommandInput = SetIdentityDkimEnabledRequest;
export declare type SetIdentityDkimEnabledCommandOutput = SetIdentityDkimEnabledResponse & __MetadataBearer;
export declare class SetIdentityDkimEnabledCommand extends $Command<SetIdentityDkimEnabledCommandInput, SetIdentityDkimEnabledCommandOutput, SESClientResolvedConfig> {
    readonly input: SetIdentityDkimEnabledCommandInput;
    constructor(input: SetIdentityDkimEnabledCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SetIdentityDkimEnabledCommandInput, SetIdentityDkimEnabledCommandOutput>;
    private serialize;
    private deserialize;
}
