import { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import { RevokePermissionsRequest, RevokePermissionsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RevokePermissionsCommandInput = RevokePermissionsRequest;
export declare type RevokePermissionsCommandOutput = RevokePermissionsResponse & __MetadataBearer;
export declare class RevokePermissionsCommand extends $Command<RevokePermissionsCommandInput, RevokePermissionsCommandOutput, LakeFormationClientResolvedConfig> {
    readonly input: RevokePermissionsCommandInput;
    constructor(input: RevokePermissionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LakeFormationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RevokePermissionsCommandInput, RevokePermissionsCommandOutput>;
    private serialize;
    private deserialize;
}
