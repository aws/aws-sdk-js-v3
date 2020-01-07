import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { GetIdentityNotificationAttributesRequest, GetIdentityNotificationAttributesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetIdentityNotificationAttributesCommandInput = GetIdentityNotificationAttributesRequest;
export declare type GetIdentityNotificationAttributesCommandOutput = GetIdentityNotificationAttributesResponse & __MetadataBearer;
export declare class GetIdentityNotificationAttributesCommand extends $Command<GetIdentityNotificationAttributesCommandInput, GetIdentityNotificationAttributesCommandOutput, SESClientResolvedConfig> {
    readonly input: GetIdentityNotificationAttributesCommandInput;
    constructor(input: GetIdentityNotificationAttributesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetIdentityNotificationAttributesCommandInput, GetIdentityNotificationAttributesCommandOutput>;
    private serialize;
    private deserialize;
}
