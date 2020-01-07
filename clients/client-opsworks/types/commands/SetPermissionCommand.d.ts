import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { SetPermissionRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type SetPermissionCommandInput = SetPermissionRequest;
export declare type SetPermissionCommandOutput = __MetadataBearer;
export declare class SetPermissionCommand extends $Command<SetPermissionCommandInput, SetPermissionCommandOutput, OpsWorksClientResolvedConfig> {
    readonly input: SetPermissionCommandInput;
    constructor(input: SetPermissionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SetPermissionCommandInput, SetPermissionCommandOutput>;
    private serialize;
    private deserialize;
}
