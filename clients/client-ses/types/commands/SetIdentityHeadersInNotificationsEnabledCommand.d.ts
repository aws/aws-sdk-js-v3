import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { SetIdentityHeadersInNotificationsEnabledRequest, SetIdentityHeadersInNotificationsEnabledResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type SetIdentityHeadersInNotificationsEnabledCommandInput = SetIdentityHeadersInNotificationsEnabledRequest;
export declare type SetIdentityHeadersInNotificationsEnabledCommandOutput = SetIdentityHeadersInNotificationsEnabledResponse & __MetadataBearer;
export declare class SetIdentityHeadersInNotificationsEnabledCommand extends $Command<SetIdentityHeadersInNotificationsEnabledCommandInput, SetIdentityHeadersInNotificationsEnabledCommandOutput, SESClientResolvedConfig> {
    readonly input: SetIdentityHeadersInNotificationsEnabledCommandInput;
    constructor(input: SetIdentityHeadersInNotificationsEnabledCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SetIdentityHeadersInNotificationsEnabledCommandInput, SetIdentityHeadersInNotificationsEnabledCommandOutput>;
    private serialize;
    private deserialize;
}
