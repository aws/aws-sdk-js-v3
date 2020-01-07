import { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import { ListPermissionsRequest, ListPermissionsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListPermissionsCommandInput = ListPermissionsRequest;
export declare type ListPermissionsCommandOutput = ListPermissionsResponse & __MetadataBearer;
export declare class ListPermissionsCommand extends $Command<ListPermissionsCommandInput, ListPermissionsCommandOutput, LakeFormationClientResolvedConfig> {
    readonly input: ListPermissionsCommandInput;
    constructor(input: ListPermissionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LakeFormationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListPermissionsCommandInput, ListPermissionsCommandOutput>;
    private serialize;
    private deserialize;
}
