import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { GetServiceRoleForAccountRequest, GetServiceRoleForAccountResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetServiceRoleForAccountCommandInput = GetServiceRoleForAccountRequest;
export declare type GetServiceRoleForAccountCommandOutput = GetServiceRoleForAccountResponse & __MetadataBearer;
export declare class GetServiceRoleForAccountCommand extends $Command<GetServiceRoleForAccountCommandInput, GetServiceRoleForAccountCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: GetServiceRoleForAccountCommandInput;
    constructor(input: GetServiceRoleForAccountCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetServiceRoleForAccountCommandInput, GetServiceRoleForAccountCommandOutput>;
    private serialize;
    private deserialize;
}
