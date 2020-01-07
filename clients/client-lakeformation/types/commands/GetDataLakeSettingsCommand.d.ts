import { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import { GetDataLakeSettingsRequest, GetDataLakeSettingsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetDataLakeSettingsCommandInput = GetDataLakeSettingsRequest;
export declare type GetDataLakeSettingsCommandOutput = GetDataLakeSettingsResponse & __MetadataBearer;
export declare class GetDataLakeSettingsCommand extends $Command<GetDataLakeSettingsCommandInput, GetDataLakeSettingsCommandOutput, LakeFormationClientResolvedConfig> {
    readonly input: GetDataLakeSettingsCommandInput;
    constructor(input: GetDataLakeSettingsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LakeFormationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetDataLakeSettingsCommandInput, GetDataLakeSettingsCommandOutput>;
    private serialize;
    private deserialize;
}
