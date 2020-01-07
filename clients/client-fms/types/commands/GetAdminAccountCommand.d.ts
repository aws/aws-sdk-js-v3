import { FMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FMSClient";
import { GetAdminAccountRequest, GetAdminAccountResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetAdminAccountCommandInput = GetAdminAccountRequest;
export declare type GetAdminAccountCommandOutput = GetAdminAccountResponse & __MetadataBearer;
export declare class GetAdminAccountCommand extends $Command<GetAdminAccountCommandInput, GetAdminAccountCommandOutput, FMSClientResolvedConfig> {
    readonly input: GetAdminAccountCommandInput;
    constructor(input: GetAdminAccountCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetAdminAccountCommandInput, GetAdminAccountCommandOutput>;
    private serialize;
    private deserialize;
}
