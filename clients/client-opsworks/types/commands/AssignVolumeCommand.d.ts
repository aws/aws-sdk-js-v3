import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { AssignVolumeRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AssignVolumeCommandInput = AssignVolumeRequest;
export declare type AssignVolumeCommandOutput = __MetadataBearer;
export declare class AssignVolumeCommand extends $Command<AssignVolumeCommandInput, AssignVolumeCommandOutput, OpsWorksClientResolvedConfig> {
    readonly input: AssignVolumeCommandInput;
    constructor(input: AssignVolumeCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssignVolumeCommandInput, AssignVolumeCommandOutput>;
    private serialize;
    private deserialize;
}
