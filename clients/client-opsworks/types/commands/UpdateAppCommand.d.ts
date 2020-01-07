import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { UpdateAppRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateAppCommandInput = UpdateAppRequest;
export declare type UpdateAppCommandOutput = __MetadataBearer;
export declare class UpdateAppCommand extends $Command<UpdateAppCommandInput, UpdateAppCommandOutput, OpsWorksClientResolvedConfig> {
    readonly input: UpdateAppCommandInput;
    constructor(input: UpdateAppCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateAppCommandInput, UpdateAppCommandOutput>;
    private serialize;
    private deserialize;
}
