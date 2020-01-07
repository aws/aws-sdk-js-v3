import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetRelationalDatabaseMasterUserPasswordRequest, GetRelationalDatabaseMasterUserPasswordResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetRelationalDatabaseMasterUserPasswordCommandInput = GetRelationalDatabaseMasterUserPasswordRequest;
export declare type GetRelationalDatabaseMasterUserPasswordCommandOutput = GetRelationalDatabaseMasterUserPasswordResult & __MetadataBearer;
export declare class GetRelationalDatabaseMasterUserPasswordCommand extends $Command<GetRelationalDatabaseMasterUserPasswordCommandInput, GetRelationalDatabaseMasterUserPasswordCommandOutput, LightsailClientResolvedConfig> {
    readonly input: GetRelationalDatabaseMasterUserPasswordCommandInput;
    constructor(input: GetRelationalDatabaseMasterUserPasswordCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetRelationalDatabaseMasterUserPasswordCommandInput, GetRelationalDatabaseMasterUserPasswordCommandOutput>;
    private serialize;
    private deserialize;
}
