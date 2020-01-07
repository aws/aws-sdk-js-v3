import { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import { GrantPermissionsRequest, GrantPermissionsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GrantPermissionsCommandInput = GrantPermissionsRequest;
export declare type GrantPermissionsCommandOutput = GrantPermissionsResponse & __MetadataBearer;
export declare class GrantPermissionsCommand extends $Command<GrantPermissionsCommandInput, GrantPermissionsCommandOutput, LakeFormationClientResolvedConfig> {
    readonly input: GrantPermissionsCommandInput;
    constructor(input: GrantPermissionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LakeFormationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GrantPermissionsCommandInput, GrantPermissionsCommandOutput>;
    private serialize;
    private deserialize;
}
