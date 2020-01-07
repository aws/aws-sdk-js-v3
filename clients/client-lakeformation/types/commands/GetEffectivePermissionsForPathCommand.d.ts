import { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import { GetEffectivePermissionsForPathRequest, GetEffectivePermissionsForPathResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetEffectivePermissionsForPathCommandInput = GetEffectivePermissionsForPathRequest;
export declare type GetEffectivePermissionsForPathCommandOutput = GetEffectivePermissionsForPathResponse & __MetadataBearer;
export declare class GetEffectivePermissionsForPathCommand extends $Command<GetEffectivePermissionsForPathCommandInput, GetEffectivePermissionsForPathCommandOutput, LakeFormationClientResolvedConfig> {
    readonly input: GetEffectivePermissionsForPathCommandInput;
    constructor(input: GetEffectivePermissionsForPathCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LakeFormationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetEffectivePermissionsForPathCommandInput, GetEffectivePermissionsForPathCommandOutput>;
    private serialize;
    private deserialize;
}
