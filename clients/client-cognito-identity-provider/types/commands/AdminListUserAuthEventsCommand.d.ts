import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { AdminListUserAuthEventsRequest, AdminListUserAuthEventsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AdminListUserAuthEventsCommandInput = AdminListUserAuthEventsRequest;
export declare type AdminListUserAuthEventsCommandOutput = AdminListUserAuthEventsResponse & __MetadataBearer;
export declare class AdminListUserAuthEventsCommand extends $Command<AdminListUserAuthEventsCommandInput, AdminListUserAuthEventsCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: AdminListUserAuthEventsCommandInput;
    constructor(input: AdminListUserAuthEventsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AdminListUserAuthEventsCommandInput, AdminListUserAuthEventsCommandOutput>;
    private serialize;
    private deserialize;
}
