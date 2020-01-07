import { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import { PutDataLakeSettingsRequest, PutDataLakeSettingsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutDataLakeSettingsCommandInput = PutDataLakeSettingsRequest;
export declare type PutDataLakeSettingsCommandOutput = PutDataLakeSettingsResponse & __MetadataBearer;
export declare class PutDataLakeSettingsCommand extends $Command<PutDataLakeSettingsCommandInput, PutDataLakeSettingsCommandOutput, LakeFormationClientResolvedConfig> {
    readonly input: PutDataLakeSettingsCommandInput;
    constructor(input: PutDataLakeSettingsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LakeFormationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutDataLakeSettingsCommandInput, PutDataLakeSettingsCommandOutput>;
    private serialize;
    private deserialize;
}
